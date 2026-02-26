provider "aws" {
region = "us-east-1"
}
 
#testing local block using buckets [] map.
resource "aws_s3_bucket" "s3_bucket_tf_publicmod" {
  count = var.bucket_count
  bucket   = "${var.bucket_name}_${count.index +1}"
}

resource "aws_s3_bucket_versioning" "versioning" {
  for_each = {
    for idx, bucket in aws_s3_bucket.s3_bucket_tf_publicmod :
    idx => bucket
  }
  bucket = each.value.id
  versioning_configuration {
    status = "Enabled"
  }
}