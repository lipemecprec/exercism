=begin
Write your code for the 'Luhn' exercise in this file. Make the tests in
`luhn_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/luhn` directory.
=end
# Validates creditcard number
class Luhn
  def self.valid?(card_number)
    card_number = remove_spaces(card_number)
    return false unless card_number.scan(/\D/).empty?
    return false if card_number.size == 1

    doubling = double_every_other(card_number)
    isvalid?(sumstring(doubling))
  end

  def self.remove_spaces(card_number)
    card_number.gsub(/\s/, '')
  end

  def self.double_every_other(card_number)
    size = card_number.size
    size -= 2
    while size >= 0
      card_number[size] = doubling(card_number[size].to_i).to_s
      size -= 2
    end
    card_number
  end

  def self.doubling(num)
    num *= 2
    num -= 9 if num > 9
    num.to_s
  end

  def self.sumstring(doubling)
    sum = 0
    size = doubling.size
    while size >= 0
      sum += doubling[size].to_i
      size -= 1
    end
    sum
  end

  def self.isvalid?(num)
    (num % 10).zero?
  end
end
