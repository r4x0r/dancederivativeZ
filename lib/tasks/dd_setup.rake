namespace :dd do
  puts 'Going to reset database'
  task :reset => ['db:drop', 'dd:setup']
  puts 'Setting Up database'
  task :setup => ['db:create', 'db:migrate', 'db:seed']
end
