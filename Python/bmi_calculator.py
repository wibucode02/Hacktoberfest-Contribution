height = float(input("Enter your heigh(m): "))
weight = float(input("Enter your weight(kg): "))

bmi = weight / (height/100)**2

def bmi_classification(bmi):
  if bmi < 18.5:
    print("underweight")
  elif bmi >= 18.5 and bmi < 25:
    print("normal")
  elif bmi >= 25 and bmi < 30:
    print("overweight")
  else:
    print("obesity")

bmi_classification(bmi)