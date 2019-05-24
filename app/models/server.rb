class Server < ApplicationRecord
  validates :name, :private, null: false
  # validate :ensure_icon

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :memberships,
    as: :joinable

  has_many :members,
    through: :memberships,
    source: :user

  has_one_attached :icon_image

  # def ensure_icon
  #   unless self.icon_image.attached?
  #     errors[:icon_image] << "must be attached"
  #   end
  # end
end
