import CustomNavbar from '../components/CustomNavbar'
const Base=({title="Welcome to our website",children})=>{
    return(
        <div className="container-fluid " >
        <CustomNavbar/>
        {children}
        </div>
    );
}
export default Base;
