import React from "react";
import {useCssHandles} from "vtex.css-handles";
type Props ={
    departments:[Category],
    handleSetSlug:any
}
type Category={
    id:number,
    name:string,
    slug:string
}

const DepartamentGroup=({departments,handleSetSlug}:Props)=>{
    console.log("Mi grupo de departaments es:",departments);
    const CSS_HANDLES=["select","options"]
    const handles=useCssHandles(CSS_HANDLES)

    const onHandleSetSlug=(event:any) =>{
        handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
    }
    const departmentOptions:any =departments.map((department:Category)=>{
        return(
            <option className={handles.options}
             value={department.slug}
            key={department.id}
            >
                {department.name}
            </option>
        )
    })
    return(
        <select className={handles.select}
        onChange={onHandleSetSlug}
        defaultValue="value0"
        >
        <option disabled value="value0"> Seleccione una opción</option> {departmentOptions}
        </select>
        ) 
}
export default DepartamentGroup