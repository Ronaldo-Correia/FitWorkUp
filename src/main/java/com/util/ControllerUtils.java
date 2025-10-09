package com.util;

import org.springframework.validation.BindingResult;
import com.exception.ValidationErrorDTO;

public final class ControllerUtils {

  private ControllerUtils() {
  }

  public static ValidationErrorDTO createValidationErrorResponse(BindingResult bindingResult) {
    var errors = new ValidationErrorDTO();
    if (bindingResult.hasErrors()) {
      bindingResult
          .getFieldErrors()
          .forEach(
              e -> errors
                  .getErrors()
                  .add(new ValidationErrorDTO.FieldError(e.getField(), e.getDefaultMessage())));
    }
    return errors;
  }

}
