import React, { useState } from 'react'

const Form = ({ addStudent }) => {

    const [name, setName] = useState('');
    const [rollnumber, setRollnumber] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        if (name && rollnumber) {
            addStudent({ name, rollnumber })
            setName('');
            setRollnumber('')
        }

    }

    return (
        <div className='form'>
            <form onSubmit={submitForm}>
                <h2>Enter Student Detail</h2>
                <hr />
                <label htmlFor="">
                    Name:
                </label>
                <input
                    type="text"
                    placeholder='Enter name...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br /><br />
                <label htmlFor="">
                    Roll Number:
                </label>
                <input
                    type="number"
                    placeholder='Enter roll number...'
                    value={rollnumber}
                    onChange={(e) => setRollnumber(e.target.value)}
                    required
                />
                <hr />
                <br />
                <input type="submit" value='submit' />
            </form>

            <hr />
        </div>
    )
}

export default Form
