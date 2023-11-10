import swal from "sweetalert";
import { addToLs } from "./localStorage";

export const handleDonate = (id) => {
    swal("Good job!", ` Donate Successfully Complete`, "success", {
        button: 'Ok',
      });
      const idInt = parseInt(id);
      addToLs(idInt);
}