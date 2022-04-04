import { Alert } from "bootstrap";




class Alert {

    static danger(msg){

        return   `<p class="alert alert-danger"> ${msg}</p>`
    }

    static warning(msg){

        return   `<p class="alert alert-warning"> ${msg}</p>`
    }
    static success(msg){

        return   `<p class="alert alert-success"> ${msg}</p>`
    }
    static info(msg){

        return   `<p class="alert alert-info"> ${msg}</p>`
    }


}


export default Alert;