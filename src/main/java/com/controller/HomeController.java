package com.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import static com.consts.RequestPathConstants.HOME;
@Controller
@RequestMapping(HOME)
public class HomeController {

    @GetMapping
    public String index() {
        return "index";  
    }

    // Adicione este método para o health check do Railway
    @GetMapping("/")
    @ResponseBody  // Retorno direto (não procura template)
    public String home() {
        return "FitWorkUp API Running";
    }
}