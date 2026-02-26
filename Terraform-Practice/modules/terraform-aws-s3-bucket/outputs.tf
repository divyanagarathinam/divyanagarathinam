output "s3-bucket" {
        value = aws_s3_bucket.s3_bucket_tf_publicmod[*].bucket
}