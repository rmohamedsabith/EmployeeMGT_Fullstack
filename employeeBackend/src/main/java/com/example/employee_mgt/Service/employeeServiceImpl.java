package com.example.employee_mgt.Service;

import com.example.employee_mgt.DTO.employeeDTO;
import com.example.employee_mgt.DTO.employeeSaveDTO;
import com.example.employee_mgt.DTO.employeeUpdateDTO;
import com.example.employee_mgt.Repo.employeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.employee_mgt.Entity.employee;

import java.util.ArrayList;
import java.util.List;

@Service

public class employeeServiceImpl implements employeeService{

    @Autowired
    employeeRepo repo;
    @Override
    public List<employeeDTO> get() {
        List<employee> emp=repo.findAll();
        List<employeeDTO> dto =new ArrayList<>();
        for (employee d:emp) {
                employeeDTO empDTO=new employeeDTO(
                        d.getId(),
                        d.getF_name(),
                        d.getL_name(),
                        d.getEmail()
                );
                dto.add(empDTO);
        }
        return dto;
        
        
    }

    @Override
    public employeeDTO save(employeeSaveDTO emp) {
        employee e=new employee(
                emp.getF_name(),
                emp.getL_name(),
                emp.getEmail()
        );
        repo.save(e);
        return new employeeDTO(e.getId(),e.getF_name(),e.getL_name(),e.getEmail());
    }

    @Override
    public employeeDTO update(employeeUpdateDTO emp) {
        if(repo.existsById(emp.getId()))
        {
            employee e=repo.getById(emp.getId());
            e.setF_name(emp.getF_name());
            e.setL_name(emp.getL_name());
            e.setEmail(emp.getEmail());

            repo.save(e);

            return new employeeDTO(emp.getId(),emp.getF_name(),emp.getL_name(),emp.getEmail());
        }else {
            System.out.println("There is no data in the given id");
            return null;
        }

    }

    @Override
    public employeeDTO Delete(int id) {
        if(repo.existsById(id))
        {
                employee e=repo.getById(id);
                repo.deleteById(id);
                return new employeeDTO(e.getId(),e.getF_name(),e.getL_name(),e.getEmail());
        }else {
            System.out.println("There is no data in the given id");
            return null;
        }

    }
}

