import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

const ModalForm = ({isOpen, onClose, mode}) => {

    const [formData, setFormData] = useState({
    id: null, // Used for editing: null for new employee, employee ID for existing
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    hire_date: '',
    job_title: '',
    department: '',
    salary: ''
  });

  const [isDeleteForm, setIsDeleteForm] = useState(false);

  useEffect(() => {
    if(mode === 'delete')
        setIsDeleteForm(true)
    else
        setIsDeleteForm(false)
  },[mode])

  const handleDelete = (mode) =>{
    if(mode == 'delete')
        setIsDeleteForm(true)
  } 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (

    <Modal
        title={mode === 'add' ? 'Add Emplyees' : mode === 'edit' ? 'Edit Employees' : 'Delete Confirmation'}
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isOpen}
        onOk={isOpen}
        onCancel={onClose}
      >
        {isDeleteForm ? (
            <p>Are you sure you want to delete this employee?</p>
        ) : (
            <div>
                <label htmlFor="">First Name</label>
                <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required/>
            </div>
        )}
    </Modal>
  )
}

export default ModalForm