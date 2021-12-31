# frozen_string_literal: true

# returns drops according to factors
class Raindrops
  def self.convert(num)
    res = ''
    res << 'Pling' if (num % 3).zero?
    res << 'Plang' if (num % 5).zero?
    res << 'Plong' if (num % 7).zero?
    if res == ''
      num.to_s
    else
      res
    end
  end
end
