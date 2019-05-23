class Membership < ApplicationRecord
  validates :joinable_type, presence: true

  belongs_to :joinable,
    polymorphic: true
  
  belongs_to :user
end
