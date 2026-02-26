/* 
provider "aws" {
region = "us-east-1"
}

/* terraform {
  backend "s3" {
    bucket = "ncpl-tf-state-bucket-1"
    key    = "terraform-dev/terraform.tfstate"
    region = "us-east-1"
    use_lockfile = true
  }
}  

 resource "aws_instance" "tf_instance" {
  count = var.instance_count
  ami           = "ami-0b6c6ebed2801a5cb"
  instance_type = var.instance_type
  tags = {
    Name = "${var.instance_name}-${count.index + 1}"
  } 
}

resource "aws_instance" "provisioners" {
  ami           = "ami-0b6c6ebed2801a5cb"
  instance_type = "t3.micro"
  tags = {
    Name = "provisioner-instance"
  }
    provisioner "remote-exec" {
    inline = [
      "sudo yum install httpd git -y",
      "sudo systemctl start httpd",
      "cd /var/www/html",
      "sudo git clone https://github.com/karishma1522success/swiggy-clone.git",
      "sudo mv swiggy-clone/* ."
    ]

    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = file("./ncpl-keypair.pem")
      host        = self.public_ip
                  }
	}
}  
*/

module "ec2" {
  source = "./modules/ec2"  
}

output "print_ec2_instance_ip" {
  value = module.ec2.ec2_instance_ip  
}