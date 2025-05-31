import { useEffect, useState } from 'react'
import { Table } from "antd";

const TableList = ({isEdit, isDelete}) => {
const columns = [
  { title: 'First Name', dataIndex: 'first_name', key: 'first_name' },
  { title: 'Last Name', dataIndex: 'last_name', key: 'last_name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Phone', dataIndex: 'phone', key: 'phone' },
  { title: 'Job Title', dataIndex: 'job_title', key: 'job_title' },
  { title: 'Department', dataIndex: 'department', key: 'department' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () =>
        <span>
            <button onClick={isEdit} className='py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold mr-2'>Edit</button>
            <button onClick={isDelete} className='py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold mr-2'>Delete</button>
        </span> ,
  },
];

// State to store any error messages from API calls
  const [error, setError] = useState(null);
  const [employees, setEmployees] = useState([]);

// Base URL for the backend API
  const API_BASE_URL = 'http://localhost:5000/employees';

  // useEffect hook to fetch employees when the component mounts
  useEffect(() => {
    fetchEmployees();
  }, []); // Empty dependency array means this runs once on mount

  // Function to fetch all employees from the backend
  const fetchEmployees = async () => {
    setError(null); // Clear previous errors
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEmployees(data); // Update the employees state
        console.log('response :'+ JSON.stringify(employees))
    } catch (error) {
      console.error("Error fetching employees:", error);
      setError("Failed to fetch employees. Please check the backend server.");
    }
  };
  const handleClick = (modes) => {
    mode = modes;
    isOpen = true
  }

  return (
    <div>
        <Table columns={columns} dataSource={employees}/>
    </div>
  )
}

export default TableList