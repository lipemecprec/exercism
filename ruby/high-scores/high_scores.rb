# frozen_string_literal: true

# Highscores data handler
class HighScores
  def initialize(scores)
    @scores = scores
  end

  attr_reader :scores

  def latest
    @scores.last
  end

  def personal_best
    @scores.max
  end

  def personal_top_three
    @scores.sort!
    length = @scores.length
    length > 2 ? @scores.slice(-3..-1).reverse : @scores.reverse
  end

  def latest_is_personal_best?
    @scores.max == @scores.last
  end
end
