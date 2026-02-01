import psutil #import library to monitor cpu usage

def check_cpu_usage():
    cpu_threshold = int(input("Enter CPU useage threshold: "))
    current_cpu = psutil.cpu_percent(interval=1)

    print(f"Current CPU usage: {current_cpu}%")

    if current_cpu > cpu_threshold:
        print(f"High CPU usage detected: {current_cpu}%")
    else:
        print(f"CPU usage is normal: {current_cpu}%")


check_cpu_usage()