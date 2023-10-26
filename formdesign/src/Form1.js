
import React from 'react'


export function Form1(){

    return(
        <div>
            <div>
                <h3>User Form</h3> <br/>
            </div>
            <div>
                <form method="POST" action="">
                    <table>
                        <tr>
                            <td><label htmlFor="name">Name: </label></td>
                            <td><input type="text" id="name" value="" required  /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">Password: </label></td>
                            <td><input type="password" id="password" value="" required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email: </label></td>
                            <td><input type="text" id="email" value="" required /></td>
                        </tr>
                        <tr><td colSpan="2"><button>Submit</button></td></tr>
                    </table>
                </form>
            </div>
        </div>
    )
}