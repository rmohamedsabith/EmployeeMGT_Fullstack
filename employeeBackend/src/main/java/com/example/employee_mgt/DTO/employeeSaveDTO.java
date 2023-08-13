package com.example.employee_mgt.DTO;

public class employeeSaveDTO {

    private String f_name;
    private String l_name;
    private String email;

    public employeeSaveDTO() {
    }

    public employeeSaveDTO(String f_name, String l_name, String email) {
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
    }

    public String getF_name() {
        return f_name;
    }

    public void setF_name(String f_name) {
        this.f_name = f_name;
    }

    public String getL_name() {
        return l_name;
    }

    public void setL_name(String l_name) {
        this.l_name = l_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "employeeSaveDTO{" +
                "f_name='" + f_name + '\'' +
                ", l_name='" + l_name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
