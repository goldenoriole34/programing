from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium import webdriver
import pyperclip
import time

driver = webdriver.Chrome() # 현재파일과 동일한 경로일 경우 생략 가능

user_id = 'heidi_story'
user_pw = 'dlgPdls3'

# 1. 네이버 이동
driver.get('http://naver.com')

# 2. 로그인 버튼 클릭
elem = driver.find_element(By.CSS_SELECTOR, 'a.link_login')
elem.click()

# 3. id 복사 붙여넣기
elem_id = driver.find_element(By.CSS_SELECTOR, '#id')
elem_id.click()
pyperclip.copy(user_id)
elem_id.send_keys(Keys.CONTROL, 'v')
time.sleep(1)

# 4. pw 복사 붙여넣기
elem_pw = driver.find_element(By.CSS_SELECTOR, 'input#pw.input_text')
elem_pw.click()
pyperclip.copy(user_pw)
elem_pw.send_keys(Keys.CONTROL, 'v')
time.sleep(1)

# 5. 로그인 버튼 클릭
elem_login = driver.find_element(By.CSS_SELECTOR, '.btn_text')
elem_login.click()

# 6. 메인에서 카페 카테고리 접속
go_cafe = driver.find_elements(By.CSS_SELECTOR, 'a.nav')[1]
go_cafe.click()

# 7. 카페 카테고리에서 판도라 접속
find_pandora = driver.find_element(By.PARTIAL_LINK_TEXT, '[판도라]')
find_pandora.click()

# 6. html 정보 출력
# print(driver.page_source)

# 7. 브라우저 종료
# driver.close() # 현재 탭만 종료
# driver.quit() # 전체 브라우저 종료