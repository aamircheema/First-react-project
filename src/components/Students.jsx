import React, { useState } from 'react';

const Students = ({ students }) => {

    const [searchRollNum, setSearchRollNum] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const search = (e) => {
        e.preventDefault();
        const foundStudent = students.find((student) => student.rollnumber === searchRollNum);
        if (foundStudent) {
            setSearchResult([foundStudent]);
            setSearchRollNum('');
        } else {
            alert(`No result`);
        }
    };

    return (
        <div>
            <h1>Student's Record</h1>
            <form onSubmit={search}>
                <h4>Search by roll number</h4>
                <label htmlFor="search-input">Roll Number:</label>
                <input
                    type="number"
                    value={searchRollNum}
                    onChange={(e) => setSearchRollNum(e.target.value)}
                />
                <input type="submit" value="search" />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResult.map((student) => (
                        <tr key={student.rollnumber}>
                            <td>{student.name}</td>
                            <td>{student.rollnumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>All Student's</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.rollnumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Students;
