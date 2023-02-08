import React ,{useState}from "react"
import { useQuery } from "react-apollo"
import QUERY_VALUE from "../graphql/getDepartamentsGroup.graphql"
import DepartamentGroup from "./DepartmentGroup"
import {SearchBar} from "vtex.store-components"
import {useCssHandles} from "vtex.css-handles";

const DepartmentSearch=()=>{
    const CSS_HANDLES=["container","container__loading"]
    const handles=useCssHandles(CSS_HANDLES)

    const {data, loading}=useQuery(QUERY_VALUE)
    const [slug,setSlug]=useState("")
    console.log("Mi slug seleccionado es ",slug)
    return loading 
    ?
     <div className={handles.container__loading}>Loading ...</div>
     : <div className={handles.container}>
     <DepartamentGroup 
     departments={data?.categories[0]?.children}
     handleSetSlug={setSlug}
     />
     <SearchBar
      customSearchPageUrl={slug}
     placeholder="¿Que buscas en VTEX University?"
     displayMode="search-and-cleare-buttons"
     />
     </div> 
}
export default DepartmentSearch