# frozen_string_literal: true

# Matrix
class Matrix
  def initialize(matrix)
    @matrix = []
    lines = matrix.split(/\n/)
    lines.each do |line|
      @matrix << line.split.map(&:to_i)
    end
  end

  attr_accessor :matrix

  def rows
    @matrix
  end

  def columns
    @matrix.transpose
  end
end
