provider "aws" {
region = "us-east-1"
}
 
 resource "aws_instance" "ec2_instance" {
  count = var.instance_count
  ami           = "ami-0b6c6ebed2801a5cb"
  instance_type = var.instance_type
  tags = {
    Name = "${var.instance_name}-${count.index + 1}"
  } 
}