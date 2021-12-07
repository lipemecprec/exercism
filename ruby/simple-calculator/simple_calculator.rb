# frozen_string_literal: true

# Error handling exercice
class SimpleCalculator
  ALLOWED_OPERATIONS = ['+', '/', '*'].freeze
  # Custom Error class
  class UnsupportedOperation < StandardError; end

  def self.calculate(first_operand, second_operand, operation)
    case operation
    when '+'
      "#{first_operand} + #{second_operand} = #{first_operand + second_operand}"
    when '/'
      "#{first_operand} / #{second_operand} = #{first_operand / second_operand}"
    when '*'
      "#{first_operand} * #{second_operand} = #{first_operand * second_operand}"
    else
      raise UnsupportedOperation, 'Invalid Operation.'
    end
  rescue ZeroDivisionError
    'Division by zero is not allowed.'
  rescue TypeError
    raise ArgumentError
  end
end
