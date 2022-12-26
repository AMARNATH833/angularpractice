import { AbstractControl } from "@angular/forms";


export function userName(control:AbstractControl){

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