import { AbstractControl } from "@angular/forms";


export function fullName(control:AbstractControl){

    if(control && (control.value!==null||control.value !==undefined)){
        const regex=new RegExp('^[A-z]{8}');
    
    
    if(!regex.test(control.value )){
        return{
            isError:true
        };
    }
}
    return null;
}

export function ageOf(control:AbstractControl){
    if(control && (control.value!==null||control.value !==undefined)){
        const note=new RegExp('[0-9]{2}');

    
    if(!note.test(control.value)){
        return{
            isError:true
        }
    }
}
    return null;
}