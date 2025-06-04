(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const FilesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const FilesToDelete = FilesToEvaluate.map( files => files.flagged );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class UserClass { };
    interface UserInterface { };


    // Todo: Tarea
        
    // día de hoy - today
    const TodayDate = new Date();
    
    // días transcurridos - elapsed time in days
    const ElapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const NumberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const FirstName = 'Fernando';
    
    // primer apellido - last name
    const LastName = 'Herrera';

    // días desde la última modificación - days since modification
    const DaysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const MaxClassesPerStudent = 6;


})();




