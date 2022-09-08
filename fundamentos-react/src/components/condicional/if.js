export default function Componente(props){
    if(props.test){
        return props.children
    }else{
        return false
    }
}