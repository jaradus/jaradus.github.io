require 'spec_helper'

describe Pokemon do
  it "should not have any records" do
    (Pokemon.all.count).should eq(0)
  end
end
