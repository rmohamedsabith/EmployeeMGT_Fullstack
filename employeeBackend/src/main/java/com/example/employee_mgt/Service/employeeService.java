package com.example.employee_mgt.Service;

import com.example.employee_mgt.DTO.employeeDTO;
import com.example.employee_mgt.DTO.employeeSaveDTO;
import com.example.employee_mgt.DTO.employeeUpdateDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface employeeService
{
    List<employeeDTO> get();

    employeeDTO save(employeeSaveDTO emp);

    employeeDTO update(employeeUpdateDTO emp);

    employeeDTO Delete(int id);
}
