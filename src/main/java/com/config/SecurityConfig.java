package com.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.service.impl.CustomUserDetailService;
import com.repository.PapelRepository;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final CustomUserDetailService userDetailsService;
    private final PapelRepository papelRepository;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .cors(cors -> {}) // ✅ habilita CORS
                .csrf(csrf -> csrf.disable()) // ✅ desativa CSRF para APIs
                .headers(headers -> headers.frameOptions().disable()) // ✅ permite H2 console se necessário
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/api/**",        // ✅ libera todas as rotas da API
                                "/",              // ✅ libera rota raiz (health check)
                                "/img/**",        // ✅ libera assets
                                "/js/**",
                                "/css/**"
                        ).permitAll()
                        .anyRequest().authenticated() // ✅ protege outras rotas
                )
                .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // ✅ para salvar senhas com segurança
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:5173") // ✅ permite chamadas do front
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*");
            }
        };
    }
}
