# Log line Parser
class LogLineParser
  def initialize(line)
    @line = line
  end

  def message
    @line.gsub(/.*:\s*|[\n\v\f\t\r]*/,'').strip
  end

  def log_level
    @line.gsub(/\[|\]:.*|[\n\v\f\t\r]*/,'').downcase
  end

  def reformat
    message + " (" + log_level + ")"
  end
end
