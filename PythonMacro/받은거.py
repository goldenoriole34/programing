from selenium.webdriver.common.keys import Keys
from selenium.webdriver import ActionChains
#안씀
from selenium.webdriver.support.ui import WebDriverWait as wait
from selenium import webdriver
#안씀
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import pyperclip
import time

#안씀
#def document_initialised(browser):
#    return browser.execute_script("return initialised")

browser = webdriver.Chrome() # 현재파일과 동일한 경로일 경우 생략 가능
# time.sleep(10)

user_id = 'heidi_story'
user_pw = 'dlgPdls3'

# 1. 네이버까페 이동
browser.get('https://cafe.naver.com/testmecro')
time.sleep(3)
browser.find_element(By.XPATH, "/html/body/div[3]/div/div[1]/div[1]/div[8]/ul/li[1]/a")

# # 2. id 복사 붙여넣기
# elem_id = browser.find_element(By.ID,"id")
# elem_id.click()
# pyperclip.copy(user_id)
# elem_id.send_keys(Keys.CONTROL, 'v')
# time.sleep(1)

# # 3. pw 복사 붙여넣기
# elem_pw = browser.find_element(By.ID,"pw")
# elem_pw.click()
# pyperclip.copy(user_pw)
# elem_pw.send_keys(Keys.CONTROL, 'v')
# time.sleep(1)

# # 4. 로그인 버튼 클릭
# elem = browser.find_element(By.CLASS_NAME, "btn_login")#ind_element_by_class_name('link_login')
# elem.click()

# 5. 브라우저 등록
browser.find_element(By.CLASS_NAME,"btn").click()
time.sleep(10)

# 5. 카페 글쓰기
#오브젝트 등록되나 작동이 비정상적이므로 디폴트로 들어가 있는 포커싱을 이용
#alt + 0 웹 접근성 도움말 이용

elem_a = browser.find_element(By.XPATH,"/html/body/div[1]/div/div/section/div/div[2]/div[1]/div[2]/div/div[1]/div/div[1]/div[2]/section/article/div/div/div/div/div/p/span[1]")

#내용
ActionChains(browser).send_keys("내용").perform()
time.sleep(2)
#제목
elem_b = browser.find_element(By.XPATH,"/html/body/div[1]/div/div/section/div/div[2]/div[1]/div[1]/div[2]/div/textarea").click()
ActionChains(browser).send_keys("제목").perform()
time.sleep(2)
#계시판
browser.find_element(By.XPATH,"/html/body/div[1]/div/div/section/div/div[2]/div[1]/div[1]/div[1]/div[1]/div/div[1]/button").click()
time.sleep(2)
#계시판선택
browser.find_element(By.XPATH,"/html/body/div[1]/div/div/section/div/div[2]/div[1]/div[1]/div[1]/div[1]/div/div[2]/ul/li/button").click()
time.sleep(2)
#작성버튼
browser.find_element(By.XPATH,"/html/body/div[1]/div/div/section/div/div[1]/div/a").click()
# 6. html 정보 출력
print(browser.page_source)

# 7. 브라우저 종료
# browser.close() # 현재 탭만 종료
# browser.quit() # 전체 브라우저 종료