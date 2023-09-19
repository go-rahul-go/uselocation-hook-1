import React from 'react'
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const location = useLocation();
  return (
    <div className='page'>
        <h1>{location.pathname.slice(1)} us </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolores unde? Vel temporibus possimus, autem aliquid quasi repellat eius. Ratione neque quae doloribus delectus impedit, assumenda possimus aspernatur officiis pariatur!</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, in.</p><br/>
        <table>
            <thead>
                <tr>
                    <td>Location</td>
                    <td>phone</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lorem, ipsum.</td>
                    <td>121133123</td>
                </tr>
                <tr>
                    <td>Lorem, ipsum.</td>
                    <td>121133123</td>
                </tr>
                <tr>
                    <td>Lorem, ipsum.</td>
                    <td>121133123</td>
                </tr>
                <tr>
                    <td>Lorem, ipsum.</td>
                    <td>121133123</td>
                </tr>
                <tr>
                    <td>Lorem, ipsum.</td>
                    <td>121133123</td>
                </tr>
                <tr>
                    <td>Lorem, ipsum.</td>
                    <td>121133123</td>
                </tr>
                <tr>
                    <td>Lorem, ipsum.</td>
                    <td>121133123</td>
                </tr>
                <tr>
                    <td>Lorem, ipsum.</td>
                    <td>121133123</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Contact;