workflow "Deploy to test" {
  on = "push"
  resolves = ["GitHub Action for Slack"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@0dbb077f64d0ec1068a644d25c71b1db66148a24"
  args = "branch master"
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Filters for GitHub Actions"]
  args = "run-script build"
}

action "GitHub Action for AWS" {
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  needs = ["GitHub Action for npm"]
  args = "s3 cp $GITHUB_WORKSPACE/build/ s3://test.wim.usgs.gov/sparrow-southwest-test/ --recursive"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
}

action "GitHub Action for Slack" {
  uses = "Ilshidur/action-slack@a6d9e9ed519555c498265694cf2d7367d9dc6926"
  needs = ["GitHub Action for AWS"]
  secrets = ["SLACK_WEBHOOK"]
  args = "Successfully deployed to test site"
}
