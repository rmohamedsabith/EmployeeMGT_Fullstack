package com.example.employee_mgt.Controller;

import com.example.employee_mgt.DTO.employeeUpdateDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.employee_mgt.Service.employeeServiceImpl;
import com.example.employee_mgt.DTO.employeeDTO;
import com.example.employee_mgt.DTO.employeeSaveDTO;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/api/v1")
public class employeeController {

    @Autowired
    employeeServiceImpl impl;
    @GetMapping("/employee")
    public List<employeeDTO> getAll()
    {
        List<employeeDTO> employees =impl.get();
        return employees;
    }
    @PostMapping("/employee/save")
    public employeeDTO save(@RequestBody employeeSaveDTO emp)
    {
        employeeDTO employees =impl.save(emp);
        return employees;
    }
    @PutMapping("/employee/update")
    public employeeDTO update(@RequestBody employeeUpdateDTO emp)
    {
        employeeDTO employees =impl.update(emp);
        return employees;
    }
    @DeleteMapping("/employee/delete/{id}")
    public employeeDTO save(@PathVariable int id)
    {
        employeeDTO employees =impl.Delete(id);
        return employees;
    }
}
