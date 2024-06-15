import { useNavigate } from 'react-router-dom';
import './rental.css'
import { useEffect, useState } from 'react';
import { UpdateApi } from '../../services/Rental';
import IEquipment from '../../types/IEquipment';
import Status from '../../types/StatusEnum';
import Category from '../../types/CategoryEnum';

function RentalView() {  
    const navigate = useNavigate();
    const [rentals, setRentals] = useState<IEquipment[]>([]);    

    useEffect(() => {
        async function fetchData() {
            const response = await UpdateApi.getAll();

            setRentals(response.data);
        }

        fetchData();
    }, []);

    function onCreate() {    
        navigate('/edit')        
    }

    async function onEdit(id: number) {        
        navigate(`/edit/${id}`)            
    }

    async function onDelete(id: number) {
        await UpdateApi.delete(id);
        setRentals(rentals.filter(rental => rental.EquipmentId !== id));
    }
    
  return (
    <div>        
        <button className="btn btn-primary" onClick={() => onCreate()}>Create</button>

        <table className="table table-striped">
            <thead>
                <tr>                    
                    <th>Name</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Location</th>
                    <th>Last Maintenance</th>
                    <th>Rental Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { 
                rentals.map((rental) => (
                    <tr key={rental.EquipmentId}>
                        <td>{rental.Name}</td>
                        <td>{Category[rental.CategoryId]}</td>
                        <td>{Status[rental.StatusId]}</td>
                        <td>{rental.Location}</td>
                        <td>{rental.LastMaintenanceDate.toLocaleString()}</td>
                        <td>{rental.RentalRate}</td>
                        <td><button className="btn btn-primary" onClick={() => onEdit(rental.EquipmentId)} >Edit</button></td>
                        <td><button className="btn btn-danger" onClick={() => onDelete(rental.EquipmentId)} >Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default RentalView
