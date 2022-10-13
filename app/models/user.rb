class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  
  has_many :blockers
  has_secure_password
end
