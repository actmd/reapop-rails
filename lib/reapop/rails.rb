require "reapop/rails/version"

module Reapop
  module Rails
    if defined?(Rails)
        class Engine < ::Rails::Engine
          # Rails -> use app/assets directory.
        end
    end
  end
end
