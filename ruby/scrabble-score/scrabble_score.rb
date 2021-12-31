# frozen_string_literal: true

# Scrabble scoring
class Scrabble
  attr_accessor :word

  def initialize(word)
    word ||= ''
    @word = word.strip.downcase
  end

  def score
    points = 0
    points += (@word.count 'aeioulnrst') * 1 + (@word.count 'dg')    * 2
    points += (@word.count 'bcmp')       * 3 + (@word.count 'fhvwy') * 4
    points += (@word.count 'k')          * 5 + (@word.count 'jx')    * 8
    points +  (@word.count 'qz')         * 10
  end

  def self.score(word)
    new(word).score
  end
end
