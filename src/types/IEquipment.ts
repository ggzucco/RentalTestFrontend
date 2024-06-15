import Category from "./CategoryEnum";
import Status from "./StatusEnum";

export default interface IEquipment {
    EquipmentId: number;
    Name: string;
    CategoryId: Category;
    StatusId: Status;
    Location: string;
    LastMaintenanceDate: Date;
    RentalRate: number;
}