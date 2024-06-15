import Category from "./CategoryEnum";
import Status from "./StatusEnum";

export default interface IEquipment {
    EquipmentId: number;
    Name: string;
    CategoryId: number; //in the description was as string but due it seems like a data from anoter colection i changed to number
    StatusId: number; //in the description was as string but due it seems like a data from anoter colection i changed to number
    Location: string;
    LastMaintenanceDate: Date;
    RentalRate: number;
}