import { useNavigate, useParams } from 'react-router-dom';
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import './rental.css'
import { UpdateApi } from '../../services/Rental';
import IEquipment from '../../types/IEquipment';
import Status from '../../types/StatusEnum';
import Category from '../../types/CategoryEnum';

function RentalEdit() {
  let { id } = useParams();
  const [lastMaintenanceString, setLastMaintenanceString] = useState('');
  const rentalId = parseInt(id ?? '0');
  const navigate = useNavigate();

  const [formState, setFormState] = useState<IEquipment>({
    EquipmentId: 0,
    Name: '',
    CategoryId: 0,
    StatusId: 0,
    Location: '',
    LastMaintenanceDate: new Date(),
    RentalRate: 0
  });

  useEffect(() => {
    if (id) {
      async function fetchData() {
        const response = await UpdateApi.get(rentalId);
        const data = response.data;
        
        // Set the Date object for LastMaintenanceDate
        setFormState(prevState => ({
          ...prevState,
          EquipmentId: data.EquipmentId,
          Name: data.Name,
          CategoryId: data.CategoryId,
          StatusId: data.StatusId,
          Location: data.Location,
          RentalRate: data.RentalRate,
          LastMaintenanceDate: new Date(data.LastMaintenanceDate)
        }));
        // Set the formatted string for the input
        setLastMaintenanceString(new Date(data.LastMaintenanceDate).toISOString().slice(0, 16));
      }

      fetchData();
    }
  }, [id, rentalId]);


  function handleChangeSelect(event: ChangeEvent<HTMLSelectElement>) {
    const { id, value } = event.target;
    setFormState(prevState => ({
      ...prevState,       
        ...(id === 'category' && { CategoryId: parseInt(value) }),
        ...(id === 'status' && { StatusId: parseInt(value) }),        
    }));
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
        ...(id === 'name' && { Name: value }),        
        ...(id === 'lastMaintenance' && { LastMaintenanceDate: new Date(value) }),
        ...(id === 'rentalRate' && { RentalRate: parseInt(value) }),        
        ...(id === 'location' && { Location: value })
    }));
  }

  function handleChangeDateTime(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    // Update the state with the new Date object
    setFormState(prevState => ({
      ...prevState,
      LastMaintenanceDate: new Date(value)
    }));
    // Update the string for the input
    setLastMaintenanceString(value);
  }
  

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (id) {
      await UpdateApi.put(rentalId, formState);
    } else {
      await UpdateApi.post(formState);
    }
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="hidden" className="form-control" id="id" value={formState.EquipmentId} readOnly />
        <div className="mb-2">
          <label htmlFor="name" className="form-label">Name</label>          
          <input type="text" className="form-control" id="name" value={formState.Name} onChange={handleChange} />
        </div> 
        <div className="mb-2">
        <label htmlFor="category" className="form-label">Category</label>
        <select className="form-control" id="category" value={formState.CategoryId} onChange={handleChangeSelect}>
          {Object.keys(Category).filter((key: string) => isNaN(Number(key))).map((key: any) => (
            <option key={key} value={Category[key]}>
              {key}
            </option>
          ))}
        </select>
      </div>

        <div className="mb-2">
            <label htmlFor="status" className="form-label">Status</label>
            <select className="form-control" id="status" value={formState.StatusId} onChange={handleChangeSelect}>
            {Object.keys(Status).filter((key: string) => isNaN(Number(key))).map((key: any) => (
                <option key={key} value={Status[key]}>
                    {key}
                </option>
                ))}
            </select>
        </div>
        <div className="mb-2">
          <label htmlFor="location" className="form-label">Location</label>
          <input type="text" className="form-control" id="location" value={formState.Location} onChange={handleChange} />
        </div> 
        <div className="mb-2">
          <label htmlFor="lastMaintenance" className="form-label">LastMaintenanceDate</label>
          <input type='datetime-local' className="form-control" id="lastMaintenance" value={lastMaintenanceString} onChange={handleChangeDateTime} />
        </div>
        <div className="mb-4">
          <label htmlFor="rentalRate" className="form-label">RentalRate</label>
          <input type='number' className="form-control" id="rentalRate" value={formState.RentalRate} onChange={handleChange} />
        </div> 
        <div className="mb-2 d-flex gap-3">
          <button type="submit" className="btn btn-primary">Save</button>
          <button className="btn btn-danger" onClick={() => navigate('/')} >Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default RentalEdit
