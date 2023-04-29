import { useLocation } from "react-router-dom";
import "./Table.css"


export default function TableData () {
    const location = useLocation()
    return (
        <div>
            {(location.state) ? (
                <div className=" box ">
                    <table>
                        <tr>
                            <th>Full_Name </th>
                            <td> {location.state.Full_Name} </td>
                        </tr>
                        <tr>
                            <th> Roll_No </th>
                            <td> {location.state.Roll_No} </td>
                        </tr>
                        <tr>
                            <th> D.O.B.</th>
                            <td> {location.state.DOB} </td>
                        </tr>
                        <tr>
                            <th> EmailId </th>
                            <td> {location.state.EmailId} </td>
                        </tr>
                        <tr>
                            <th> Mobile Number </th>
                            <td> {location.state.Mobile_Number} </td>
                        </tr>
                    </table>
                </div>
            ) : <div>{" No Data Found "}</div>}
        </div>
    )
}      