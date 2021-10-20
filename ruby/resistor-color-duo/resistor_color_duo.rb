# Returns a 2 digit number according to resistor colors
class ResistorColorDuo
  @colors = %w[black brown red orange yellow green blue violet grey white]
  def self.value(color_code)
    num = 10 * @colors.find_index(color_code[0]).to_i
    num + @colors.find_index(color_code[1]).to_i
  end
end
