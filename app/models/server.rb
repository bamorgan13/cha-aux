class Server < ApplicationRecord
  validates :name, :private, null: false

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :memberships,
    as: :joinable

  has_many :members,
    through: :memberships,
    source: :user

  has_one_attached :icon_image
end
