from selenium import webdriver
import pyperclip
import time

driver = webdriver.Chrome()

user_id = 'heidi_story'
user_pw = 'dlgPdls3'

url = 'https://m.cafe.naver.com/ca-fe/lovelymate1004'
driver.get(url)

# ID클릭
driver.find_element(By.CSS_SELECTOR, 'input#id.input_text').click()
# ID입력
driver.find_element(By.CSS_SELECTOR, 'input#id.input_text').send_keys(user_id)

# PW클릭
driver.find_element(By.CSS_SELECTOR, 'input#pw.input_password').click()
# PW입력
driver.find_element(By.CSS_SELECTOR, 'input#pw.input_password').send_keys(user_pw)

# 엔터키 입력하여 로그인 실행
#driver.find_element(By.CSS_SELECTOR, 'input#pw.input_password').send_keys(Keys.ENTER)



# 엔터키
# driver.find_element(By.CSS_SELECTOR, '.gLFyf.gsfi').send_keys(Keys.ENTER)

# 클릭 // [1]번째 클래스
# driver.find_elements(By.CSS_SELECTOR, '.LC20lb.MBeuO.DKV0Md')[1].click()