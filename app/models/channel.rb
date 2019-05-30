# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  server_id  :integer
#  private    :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, presence: true

  belongs_to :server,
    optional: true

  has_many :memberships,
    as: :joinable

  has_many :members,
    through: :memberships,
    source: :user
end
