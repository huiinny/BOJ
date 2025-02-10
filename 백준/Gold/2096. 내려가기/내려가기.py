import sys

# 입력 최적화
input = sys.stdin.read
data = input().split("\n")

n = int(data[0])  # 첫 번째 줄: n

# 첫 번째 줄 값
dpMax = list(map(int, data[1].split()))
dpMin = dpMax[:]

for i in range(2, n + 1):
    arr = list(map(int, data[i].split()))

    dpMax[0], dpMax[1], dpMax[2] = (
        max(dpMax[0], dpMax[1]) + arr[0],
        max(dpMax[0], dpMax[1], dpMax[2]) + arr[1],
        max(dpMax[1], dpMax[2]) + arr[2]
    )

    dpMin[0], dpMin[1], dpMin[2] = (
        min(dpMin[0], dpMin[1]) + arr[0],
        min(dpMin[0], dpMin[1], dpMin[2]) + arr[1],
        min(dpMin[1], dpMin[2]) + arr[2]
    )

# 최댓값과 최솟값 출력
print(max(dpMax), min(dpMin))
